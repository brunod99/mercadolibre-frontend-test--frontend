import React from "react";

interface IBreadCrumb {
  categories: string[];
}

const Breadcrumb: React.FC<IBreadCrumb> = ({ categories }) => {
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
