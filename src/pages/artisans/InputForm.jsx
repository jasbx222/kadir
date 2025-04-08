export const Input = ({ label, value, onChange, type = "text", required = false }) => (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
      />
    </div>
  );
  
 export const Textarea = ({ label, value, onChange }) => (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
        rows={4}
      />
    </div>
  );
  
  export const FileInput = ({ label, onChange }) => (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
      <input
        type="file"
        onChange={(e) => onChange(e.target.files[0])}
        accept="image/*"
        className="w-full file:border file:border-gray-300 file:rounded-lg file:p-2 text-sm"
      />
    </div>
  );
  
  export const Select = ({ label, value, options, onChange, renderOption }) => (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
      >
        <option value="">اختر</option>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {renderOption ? renderOption(opt) : opt.name}
          </option>
        ))}
      </select>
    </div>
  );