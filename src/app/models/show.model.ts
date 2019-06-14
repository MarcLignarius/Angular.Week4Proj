export class Show {
    constructor(
      public bands: string[],
      public venue: string,
      public date: Date,
      public month: number = date.getMonth(),
      public day: number = date.getDay(),
      public year: number = date.getFullYear(),
      public price: number,
      public allAges: string,
      ) { }
  }
