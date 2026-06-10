import Bi from "../assets/Bi.png";
import dax from "../assets/dax.svg";
import sql from "../assets/sql.png";
import sqlserver from "../assets/sqlserver.png";
import oracle from "../assets/oracle.png";
import databricks from "../assets/databricks.png";
import azure from "../assets/azure.png";
import mysql from "../assets/mysql.png";
import postgree from "../assets/postgree.webp";
import python from "../assets/python.webp";
import java from "../assets/java.webp";
import javascript from "../assets/javascript.png";
import node from "../assets/node.webp";
import typescript from "../assets/typescript.png";
import powerapps from "../assets/powerapps.png";
import automate from "../assets/powerautomate.png";

export default function Skills() {
  return (
  <div className="
        mx-auto
        px-8
        pt-5
        h-full

        bg-white/10
        backdrop-blur-2xl

        border
        border-violet-200/20

        rounded-md

        shadow-[0_8px_32px_rgba(0,0,0,0.25)]

        hover:bg-white/15
        hover:border-violet-400/30
        hover:shadow-violet-500/10

        transition-all
        duration-500

        relative
        overflow-hidden
      "
    >

    <h2 className=" text-center mb-4 font-bold text-foreground">
        Skills
    </h2>

    <div className="space-y-6">

        <div className="
        mx-auto
        mb-5
        p-4
        h-full

        bg-violet-800/20

        border
        border-violet-200/20

        rounded-md

        shadow-[0_8px_32px_rgba(0,0,0,0.25)]

        hover:shadow-violet-500/10

        transition-all
        duration-500

        relative
        overflow-hidden
      ">
        <h3 className=" text-2xl text-center font-bold text-shadow-2xl text-foreground mb-3">
            Data & BI
        </h3>

        <ul className="grid text-foreground grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 items-center text-center">
            <li className="font-semibold"><img src={Bi} className="h-12 mx-auto"></img>Power BI</li>
            <li className="font-semibold"><img src={dax} className="h-12 mx-auto"></img>Dax Studio</li>
            <li className="font-semibold"><img src={sql} className="h-12 mx-auto"></img>SQL</li>
            <li className="font-semibold"><img src={databricks} className="h-12 mx-auto"></img>Databricks</li>
            <li className="font-semibold"><img src={azure} className="h-12 mx-auto"></img>Azure</li>
        </ul>
        
        </div>

        <div className="
        mx-auto
        my-8
        p-4
        h-full

        bg-violet-800/20

        border
        border-violet-200/20

        rounded-md

        shadow-[0_8px_32px_rgba(0,0,0,0.25)]

        hover:shadow-violet-500/10

        transition-all
        duration-500

        relative
        overflow-hidden
      ">
        <h3 className="text-2xl text-center font-bold text-shadow-2 text-shadow-white text-foreground mb-3">
            Databases
        </h3>
        <ul className="grid text-foreground grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 text-center">
            <li className="font-semibold"><img src={sqlserver} className="h-12 mx-auto"></img>SQL Server</li>
            <li className="font-semibold"><img src={oracle} className="h-12 mx-auto"></img>Oracle</li>
            <li className="font-semibold"><img src={mysql} className="h-12 mx-auto"></img> MySQL</li>
            <li className="font-semibold"><img src={postgree} className="h-12 mx-auto"></img>PostgreSQL</li>
        </ul>
        </div>

        <div className="
        mx-auto
        my-8
        p-4
        h-full

        bg-violet-800/20

        border
        border-violet-200/20

        rounded-md

        shadow-[0_8px_32px_rgba(0,0,0,0.25)]

        hover:shadow-violet-500/10

        transition-all
        duration-500

        relative
        overflow-hidden
      ">
        <h3 className="text-2xl text-center font-bold text-shadow-2xl text-foreground mb-5">
            Programming
        </h3>

        <ul className="text-foreground grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-5 text-center">
            <li className="font-semibold"><img src={python} className="h-12 mx-auto"></img>Python</li>
            <li className="font-semibold"><img src={java} className="h-12 mx-auto"></img>java</li>
            <li className="font-semibold"><img src={javascript} className="h-12 mx-auto"></img>javascript</li>
            <li className="font-semibold"><img src={node} className="h-12 mx-auto"></img>NodeJS</li>
            <li className="font-semibold"><img src={typescript} className="h-12 mx-auto"></img>Typescript</li>
            <li className="font-semibold"><img src={powerapps} className="h-12 mx-auto"></img>Power Apps</li>
            <li className="font-semibold"><img src={automate} className="h-12 mx-auto"></img>Power Automate</li>
        </ul>
        </div>

    </div>

    </div>

  )}