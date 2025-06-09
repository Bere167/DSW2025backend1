export class categoria {
  constructor(name, categoriaCalss) {
    this.name = name;
    this.categoriaCalss = categoriaCalss;
    this.ud = crypto.randomUUID();
  }
}
