export const Input = ({ type, id, label, required }) => {
   return (
      <div className="flex flex-col">
         <label htmlFor={id}>{label}</label>
         <input
            className="border-[1px] border-black rounded-full mt-2 py-2 px-7 "
            type={type}
            placeholder="Email"
            id={id}
            required={required}
         />
      </div>
   )
}
