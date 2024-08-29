import { Model } from "@/components/Model";
import { YourComponent } from "@/components/YourComponent";

import mockedData from '../mockedData.json'

export default function Home() {
  return <Model>
    <YourComponent {...mockedData}/>
  </Model>;
}
