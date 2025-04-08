// SelectInput.jsx
export const SelectInput = ({ label, value, onChange, options, defaultLabel }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <select
      value={value}
      onChange={onChange}
     className="w-full p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
  >
      <option value="">{defaultLabel}</option>
      {options.map((opt) => (
        <option key={opt.id} value={opt.id}>
          {opt.name}
        </option>
      ))}
    </select>
  </div>
);

  
// FileInput.jsx
export const FileInput = ({ label, onChange }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input

      type="file"
      onChange={onChange}
      accept="image/*"
   
      className="w-full p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
  
    />
  </div>
);

  
// TextInput.jsx
export const TextInput = ({ label, value, onChange, type = "text" }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <input
  
      type={type}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
      
 />
  </div>
);

export const TextArea = ({ label, value, onChange, type = "text" }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-700">{label}</label>
    <textarea style={{
    border:'2px solid #',
  }}
      type={type}
      value={value}
      onChange={onChange}
   className="w-full p-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
/>
  </div>
);
