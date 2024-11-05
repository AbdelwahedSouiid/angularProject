export class  Fournisseur {
    idFournisseur?:  any;                  
    code?: string;                               
    libelle?: string;                           
    categorieFournisseur?: CategorieFournisseur; 

}
export enum CategorieFournisseur {
    ORDINAIRE = 'ORDINAIRE',
    CONVENTIONNE = 'CONVENTIONNE',
    PREMIUM = 'PREMIUM'
}