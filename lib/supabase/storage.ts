// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );

// export async function uploadProductImage(file: File, productId: string) {
//   const fileExt = file.name.split(".").pop();
//   const fileName = `${productId}/${Math.random()}.${fileExt}`;
//   const filePath = `${fileName}`;

//   const { data, error } = await supabase.storage
//     .from("product-images")
//     .upload(filePath, file);

//   if (error) throw error;

//   // Получаем публичный URL
//   const {
//     data: { publicUrl },
//   } = supabase.storage.from("product-images").getPublicUrl(filePath);

//   // Создаем запись в таблице Image
//   const { data: imageData, error: imageError } = await supabase
//     .from("Image")
//     .insert([
//       {
//         url: publicUrl,
//         productId: productId,
//       },
//     ])
//     .select()
//     .single();

//   if (imageError) throw imageError;

//   return imageData;
// }

// export async function deleteProductImage(imageId: string) {
//   const { data: image, error: fetchError } = await supabase
//     .from("Image")
//     .select("url")
//     .eq("id", imageId)
//     .single();

//   if (fetchError) throw fetchError;

//   // Удаляем файл из storage
//   const filePath = image.url.split("/").pop();
//   const { error: storageError } = await supabase.storage
//     .from("product-images")
//     .remove([filePath!]);

//   if (storageError) throw storageError;

//   // Удаляем запись из таблицы Image
//   const { error: deleteError } = await supabase
//     .from("Image")
//     .delete()
//     .eq("id", imageId);

//   if (deleteError) throw deleteError;
// }
