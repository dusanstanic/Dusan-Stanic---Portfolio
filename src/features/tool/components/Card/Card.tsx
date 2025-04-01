import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ITool } from "@/features/project/api/type";

import classes from "./Card.module.scss";

export const Card = ({ icon, name, description }: ITool) => {
  return (
    <div className={classes.card}>
      <div>
        <FontAwesomeIcon icon={icon} fontSize={"2.5rem"} />
      </div>
      <div>
        <span className={classes.name}>{name}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};
