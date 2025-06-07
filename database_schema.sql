-- Создание схемы для маркетплейса
CREATE SCHEMA IF NOT EXISTS marketplace;

-- Перечисление для ролей пользователей
CREATE TYPE marketplace.user_role AS ENUM ('USER', 'SELLER', 'ADMIN');

-- Перечисление для статусов заказа
CREATE TYPE marketplace.order_status AS ENUM (
    'PENDING',
    'PAID',
    'PROCESSING',
    'SHIPPED',
    'DELIVERED',
    'CANCELLED',
    'REFUNDED'
);

-- Перечисление для статусов товара 
CREATE TYPE marketplace.product_status AS ENUM (
    'DRAFT',
    'ACTIVE',
    'INACTIVE',
    'OUT_OF_STOCK' 
);

-- Таблица пользователей (расширяет auth.users)
CREATE TABLE marketplace.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    role marketplace.user_role DEFAULT 'USER',
    phone TEXT,
    address TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Таблица профилей продавцов
CREATE TABLE marketplace.seller_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES marketplace.users(id),
    store_name TEXT NOT NULL,
    description TEXT,
    logo_url TEXT,
    rating DECIMAL(3,2),
    total_sales INTEGER DEFAULT 0,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Таблица категорий
CREATE TABLE marketplace.categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    image_url TEXT,
    parent_id UUID REFERENCES marketplace.categories(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Таблица брендов
CREATE TABLE marketplace.brands (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    logo_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Таблица товаров
CREATE TABLE marketplace.products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    seller_id UUID REFERENCES marketplace.seller_profiles(id),
    category_id UUID REFERENCES marketplace.categories(id),
    brand_id UUID REFERENCES marketplace.brands(id),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    old_price DECIMAL(10,2),
    stock_quantity INTEGER NOT NULL DEFAULT 0,
    status marketplace.product_status DEFAULT 'DRAFT',
    rating DECIMAL(3,2),
    total_reviews INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Таблица вариантов товаров (размеры, цвета)
CREATE TABLE marketplace.product_variants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES marketplace.products(id),
    size TEXT,
    color TEXT,
    stock_quantity INTEGER NOT NULL DEFAULT 0,
    price_adjustment DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Таблица изображений товаров
CREATE TABLE marketplace.product_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES marketplace.products(id),
    url TEXT NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Таблица заказов
CREATE TABLE marketplace.orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES marketplace.users(id),
    status marketplace.order_status DEFAULT 'PENDING',
    total_amount DECIMAL(10,2) NOT NULL,
    shipping_address TEXT NOT NULL,
    shipping_cost DECIMAL(10,2) NOT NULL,
    payment_method TEXT,
    payment_id TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Таблица элементов заказа
CREATE TABLE marketplace.order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES marketplace.orders(id),
    product_id UUID REFERENCES marketplace.products(id),
    variant_id UUID REFERENCES marketplace.product_variants(id),
    quantity INTEGER NOT NULL,
    price_at_time DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Таблица отзывов
CREATE TABLE marketplace.reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES marketplace.users(id),
    product_id UUID REFERENCES marketplace.products(id),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Таблица избранных товаров
CREATE TABLE marketplace.favorites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES marketplace.users(id),
    product_id UUID REFERENCES marketplace.products(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, product_id)
);

-- Таблица корзины
CREATE TABLE marketplace.cart_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES marketplace.users(id),
    product_id UUID REFERENCES marketplace.products(id),
    variant_id UUID REFERENCES marketplace.product_variants(id),
    quantity INTEGER NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Создание индексов для оптимизации запросов
CREATE INDEX idx_products_category ON marketplace.products(category_id);
CREATE INDEX idx_products_brand ON marketplace.products(brand_id);
CREATE INDEX idx_products_seller ON marketplace.products(seller_id);
CREATE INDEX idx_orders_user ON marketplace.orders(user_id);
CREATE INDEX idx_order_items_order ON marketplace.order_items(order_id);
CREATE INDEX idx_reviews_product ON marketplace.reviews(product_id);
CREATE INDEX idx_cart_items_user ON marketplace.cart_items(user_id);

-- Триггер для обновления updated_at
CREATE OR REPLACE FUNCTION marketplace.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Применение триггера ко всем таблицам
CREATE TRIGGER update_users_updated_at
    BEFORE UPDATE ON marketplace.users
    FOR EACH ROW
    EXECUTE FUNCTION marketplace.update_updated_at_column();

-- Повторить для всех остальных таблиц...

-- RLS (Row Level Security) политики
ALTER TABLE marketplace.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketplace.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketplace.orders ENABLE ROW LEVEL SECURITY;
-- И так далее для всех таблиц...

-- Пример политики для продуктов
CREATE POLICY "Products are viewable by everyone"
    ON marketplace.products
    FOR SELECT
    USING (true);

CREATE POLICY "Products can be created by sellers"
    ON marketplace.products
    FOR INSERT
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM marketplace.users
            WHERE id = auth.uid()
            AND role = 'SELLER'
        )
    ); 