import React from "react";
import { useState, useEffect } from "react";

const More = () => {
  const [count, setCount] = useState(0);
  const show = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <center>More Page</center>
      <button
        onClick={show}
        className="border-2 rounded-[12px] bg-black text-fuchsia-100"
      >
        Click me{" "}
      </button>
      <p>{count}</p>
      <p className="contenShow hidden ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
        officia, sint temporibus, nobis harum eius recusandae eos quam dolorem
        numquam explicabo fugit natus! Debitis eum doloribus dolores, hic ad,
        temporibus illum atque nulla ea perferendis ipsum? Ab, eius enim
        reprehenderit tempora tenetur impedit labore explicabo maxime? Nihil
        dicta expedita quidem sequi maiores, recusandae nulla omnis? Illo
        tempora numquam quaerat eveniet, neque soluta nam? Illum iste quidem
        unde ab. Ut ratione explicabo asperiores eius sunt modi pariatur
        voluptas culpa facere eveniet nemo aperiam, dolorum nostrum, esse quis
        ducimus velit! Voluptate architecto accusantium maxime libero quos
        fugiat obcaecati quod aut voluptatem doloremque molestiae quidem animi
        voluptates omnis blanditiis aperiam dolore, delectus numquam ducimus
        provident sit velit dolorum accusamus. Dolorem optio ipsam commodi
        corporis quia velit facilis, molestiae dicta sunt, in maxime ut, magnam
        laudantium? Aliquid similique facere dolores expedita eum molestias iure
        corporis. Iusto aspernatur, earum eveniet quaerat nam enim natus, ullam
        facere itaque fugit maiores vel? Perferendis, maiores ad, corrupti vitae
        nam quaerat alias laborum dolorem libero saepe molestiae dolorum? Alias
        tempora quae ex exercitationem obcaecati debitis corporis ipsam cum
        autem! Nisi animi vero doloribus corrupti aliquid vel dolore fugit
        dolores soluta distinctio atque, harum quae quam voluptatem, deserunt
        sunt? Minima!
      </p>
    </div>
  );
};
export default More;
