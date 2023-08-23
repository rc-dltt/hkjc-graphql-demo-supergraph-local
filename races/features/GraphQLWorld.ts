import { World } from "@cucumber/cucumber";

export default class extends World {
  context: { principal: any; dataSources: any };
  parent: any;
  args: { first: number; after: string };
  actual: any;

  constructor(options: any) { 
    super(options);
  }
}
