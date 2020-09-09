import React from "react";
import { IBreadcrumb } from "../../types/Components/Breadcrumb";

const Breadcrumb: React.FC<IBreadcrumb> = ({ categories }) => {
  return (
    <section className="breadcrumbs pt-regular pb-regular quantity">
      <ul className="breadcrumbs__list d-flex align-items-center">
        {categories.map((category) => (
          <li className="breadcrumbs__list-item text-light" key={category}>
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Breadcrumb;
