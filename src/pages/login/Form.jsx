import React from 'react'
const Form = ({
    setEmail,
    setPassword,
   handleSubmit,
   email,
   password,
   input
}) => {
  return (
    <form
    onSubmit={handleSubmit}
    className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
  >
    <p className="text-center text-lg font-medium">
      صفحة تسجيل دخول الادمن
    </p>
   
    <div>
      <label htmlFor="email" className="sr-only">الايميل</label>
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={input}
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
          placeholder="ادخل ايميلك"
        />
        <p>{email!=email}</p>
      </div>
    </div>

    <div>
      <label htmlFor="password" className="sr-only">الباسورد</label>
      <div className="relative">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
          placeholder="ادخل الباسورد"
        />
      </div>
    </div>

    <button
      type="submit"
      style={{ backgroundColor: "#2A3890" }}
      className="block w-full rounded-lg px-5 py-3 text-sm font-medium text-white"
    >
      تسجيل الدخول
    </button>
  </form>
  )
}

export default Form