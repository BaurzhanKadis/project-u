// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { uploadProductImage } from "@/lib/supabase/storage";

// interface ProductImageUploadProps {
//   productId: string;
//   onUploadComplete?: (imageUrl: string) => void;
// }

// export function ProductImageUpload({
//   productId,
//   onUploadComplete,
// }: ProductImageUploadProps) {
//   const [isUploading, setIsUploading] = useState(false);

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     try {
//       setIsUploading(true);
//       const imageData = await uploadProductImage(file, productId);
//       onUploadComplete?.(imageData.url);
//     } catch (error) {
//       console.error("Error uploading image:", error);
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleFileChange}
//         disabled={isUploading}
//         className="hidden"
//         id="product-image-upload"
//       />
//       <Button
//         onClick={() => document.getElementById("product-image-upload")?.click()}
//         disabled={isUploading}
//       >
//         {isUploading ? "Загрузка..." : "Загрузить изображение"}
//       </Button>
//     </div>
//   );
// }
