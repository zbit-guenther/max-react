import { CardSimple } from '../lib/components'

interface Props {
  text: string
}
const Todo = ({ text }: Props) => {
  const handleAction = () => {
    alert('ACTION performed')
  }

  return (
    <CardSimple
      text={text}
      action={handleAction}
      actionText='Delete It'
      confirmAction={true}
    />
  )
}
export default Todo
