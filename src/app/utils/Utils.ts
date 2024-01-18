export class Utils {
  private constructor() {
  }

  public static startScore = (rate: number) => {
    {
      return '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
    }
  }
}

