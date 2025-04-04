import { useState } from "react";

import { useParams } from "react-router";

import { PROJECTS } from "@/features/project/api/constant";
import { IProject } from "@/features/project/api/type";

import classes from "./Project.module.scss";
import { Pills } from "@/features/tool/components/Pills/Pills";

const fetchProject = (id: string | undefined) => {
  return PROJECTS.find((project) => project.id === id) as IProject;
};

export const Project = () => {
  const { id } = useParams<{ id: string }>();
  const [{ title, description, keyPoints, tools }] = useState(() =>
    fetchProject(id)
  );

  return (
    <div className={classes.container}>
      <section>
        <h1>{title}</h1>
      </section>
      <section>
        <p className={classes.description}>{description}</p>
      </section>
      <section>
        <ul className={classes.list}>
          {keyPoints.map((keyPoint) => (
            <li key={keyPoint}>
              <p
                className={classes.keyPoint}
                dangerouslySetInnerHTML={{ __html: keyPoint }}
              ></p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Pills pills={tools} />
      </section>
    </div>
  );
};
