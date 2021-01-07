import { Instance } from "./Instance";

export class InstanceManager {
  instances: Record<string, Instance>;

  constructor() {
    this.instances = {};
  }

  addInstance(id: string) {
    this.instances[id] = new Instance(id);
  }

  deleteInstance(id: string): void {
    delete this.instances[id];
  }

  getInstance(id: string): Instance | undefined {
    return this.instances[id];
  }
}

const instanceManager = new InstanceManager();
export function getInstanceManager() {
  return instanceManager;
}
