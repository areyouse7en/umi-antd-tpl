import { FC } from 'react'
import { Layout } from 'antd'
import style from './style.less'

const { Content } = Layout

const Main: FC = ({ children }) => {
  return (
    <Layout className={style.layout}>
      <Content className={style.content}>
        {children}
      </Content>
    </Layout>
  )
}

export default Main