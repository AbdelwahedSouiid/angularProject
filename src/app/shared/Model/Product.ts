// src/app/shared/Model/Product.ts
export class Product {
  idProduit: number | null = null;  // Primary key, nullable when creating
  codeProduit: string | null = null;  // Unique code for the product
  libelleProduit: string | null = null;  // Product name or label
  prix: number | null = null;  // Product price
  dateCreation: Date | null = null;  // Creation date of the product
  dateDerniereModification: Date | null = null;  // Last modification date
  categorieProduitId: number | null = null;  // Foreign key for category
  stockId: number | null = null;  // Foreign key for stock
}
