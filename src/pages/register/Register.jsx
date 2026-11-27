import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import registerSchema from "./schemas/register-schema"

const Register = () => {

  const {
        register, 
        handleSubmit, 
        formState: { errors }
      } = useForm({
        resolver : zodResolver(registerSchema)
      })

  return <div className="flex w-full items-center justify-center">
    <div className="card card-border card-md min-w-md">
      <div className="card-body">
        <h2 className="card-tittle">Selamat Datang</h2>
        <p>Silahkan lengkapi form di bawah ini</p>

        <form onSubmit={handleSubmit(console.log)}className=" space-y-5">
          <label className="floating-label">
            <span>Full Name</span>
            <input type="text" 
            placeholder="Masukkan nama anda" 
            className="input input-md" 
            {...register('name')}
            />
          </label>

          <label className="floating-label">
            <span>Email</span>
            <input type="email" placeholder="Masukkan email" className="input input-md" />
          </label>

          <label className="floating-label">
            <span>Password</span>
            <input type="password" placeholder="Masukkan password" className="input input-md" />
          </label>

          <button type="submit" className="btn btn-primary">Buat akun</button>
        </form>
      </div>
    </div>
  </div>
}

export default Register