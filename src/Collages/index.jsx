import CollapsedRow from "../Collages/CollapsedRow/CollapsedRow";
import cls from "./Collages.module.scss";

export default function CollagesComponent({ colleges }) {
  return (
    <div className={`container ${cls.Collages}`}>
      <h1 className={`section__heading`}>Учебные заведения МВД КР</h1>
      <ul>
        {!!colleges.length &&
          colleges.map(({ id, ...rest }) => {
            return <CollapsedRow key={`collages-row-${id}`} {...rest} />;
          })}
      </ul>
    </div>
  );
}
