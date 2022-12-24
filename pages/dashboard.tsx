import { useAuth } from "../context/AuthUserContext"

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div className="container mx-auto px-4 m-12">
      {user && user['email']}
    </div>
  )
}
