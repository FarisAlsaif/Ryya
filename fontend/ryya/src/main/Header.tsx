function Header() {
  return (
    <div className="bg-teal-600 w-full h-16 flex justify-between items-center p-8 ">
      <div className=" text-teal-100 ">Header</div>
      <ul className="flex gap-2 text-teal-100 ">
        <li>Home</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </div>
  );
}

export default Header;
