interface Trigger {
  id: string;
  name: string;
  description: string;
  fields: Field[];
}

interface Action {
  id: string;
  name: string;
  description: string;
  fields: Field[];
  execute: (fields: Record<string, any>) => Promise<void>;
}

interface Field {
  id: string;
  name: string;
  type: FieldType;
  required: boolean;
  options?: string[];
}

enum FieldType {
  Text = "text",
  Number = "number",
  Boolean = "boolean",
  Select = "select",
  MultiSelect = "multi-select",
  Date = "date",
  Time = "time",
  DateTime = "datetime",
}

interface Workflow {
  id: string;
  name: string;
  description: string;
  triggers: Trigger[];
  actions: Action[];
  connections: Connection[];
}

interface Connection {
  id: string;
  triggerId: string;
  actionId: string;
  mappings: Mapping[];
}

interface Mapping {
  sourceFieldId: string;
  targetFieldId: string;
}


export const add = (a: number, b: number) => {
    return a + b;
};

export const subtract = (a: number, b: number) => {
    return a - b;
};
