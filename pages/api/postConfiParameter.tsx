import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler( req: NextApiRequest,
  res: NextApiResponse<Data>) {


    if (req.method === "POST") {
        let data = await fs.promises.readdir(`confiParameterData`);
        //   console.log( typeof data)
        fs.promises.writeFile(`confiParameterData/${data.length + 1}.json`, JSON.stringify(req.body))
        res.status(200).json(req.body);

    }
     else {
      // let data = await fs.promises.readdir('confiParameterData', 'utf-8')
      // let myfile;
      // let allblogs = []
      // for (let i = 0; i < data.length; i++) {
      //   myfile = await fs.promises.readFile(('confiParameterData/' + data[i]), 'utf-8')
      //   allblogs.push(JSON.parse(myfile))
      // }
      //   console.log(typeof allblogs)
      // res.status(200).json("allblogs")
    }
}
