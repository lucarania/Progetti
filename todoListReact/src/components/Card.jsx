function Card({ title, imgURL, children }) {
  return (
    <div className="rounded-md bg-slate-500">
      <img src={imgURL} alt="" />
      <div className=" p-1">
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Card;
