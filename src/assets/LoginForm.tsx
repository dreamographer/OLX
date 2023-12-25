import React from 'react'

const LoginForm = () => {
  return (
    <>
          <form >
              <div className="mx-5" >
                  <label htmlFor="email">Email</label>
                  <div className="border-2 rounded border-black/50 h-13">
                      <input className=" pl-4 h-12 w-full" name="email" id="email" type="text" />
                  </div>
              </div>
              <div className="mx-5" >
                  <label htmlFor="email">Password</label>
                  <div className="border-2 rounded h-13 border-black/50">
                      <input className="pl-4 h-12 w-full" id="password" name="password" type="text" />
                  </div>
              </div>
              <div className="mx-5 mt-3" >
                  <div className="w-full flex justify-center h-13">
                      <button className="h-12 w-24 border-2 border-green-900 rounded-md hover:bg-green-950 hover:text-white" type="submit">Login</button>
                  </div>
              </div>

          </form>
    </>
  )
}

export default LoginForm