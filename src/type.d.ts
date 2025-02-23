declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}
declare module "*.jpeg" {
  const content: any;
  export default content;
}
