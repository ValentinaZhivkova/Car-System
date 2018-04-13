export class AddCarModel {
  constructor(public make?: string,
              public model?: string,
              public year?: number,
              public engine?: number,
              public price?: number,
              public image?: string,
              public millage?: number) {
  }
}
