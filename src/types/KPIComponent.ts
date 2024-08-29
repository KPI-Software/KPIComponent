/**
 * @interface IKPIComponent
 *
 *
 * @template M - O tipo do modelo associado ao componente. Define a estrutura visual do componente.
 * @template I - O tipo do indicador associado ao componente. Define a métrica ou critério específico que está sendo medido pelo KPI.
 * @template CL - O tipo dos valores calculados pelo KPI. Representa resultados derivados a partir dos dados do modelo.
 * @template CM - O tipo dos valores do componente do KPI. Representa dados diretamente relacionados ao componente monitorado.
 *
 */

export interface IKPIComponent<M = any, I = any, CL = any, CM = any> {
  owner: string;
  modelName: string;
  name: string;
  styles: {
    gap: number;
    skin: Record<number, { fontColor: string; backgroundColor: string }>;
  };
  propriety: {
    model: M;
    indicator: I;
  };
  values: {
    calculated: CL;
    component: CM;
  };
}
