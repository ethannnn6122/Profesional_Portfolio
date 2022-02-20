import React, {Component} from 'react';
import { Menu, Layout} from 'antd';
import { Routes, Route, Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  BookOutlined,
  CodeOutlined,
  HistoryOutlined,
  FormOutlined,
} from '@ant-design/icons';

// Components
import HomeContainer from '../containers/HomeContainer';
import AboutContainer from '../containers/AboutContainer';

const { Sider, Header, Footer } = Layout;

class Navigation extends Component {
    state = {
        collapsed: false,
      };
    
      toggle = () => {
		let brand = document.getElementById("brand")
        this.setState({
          collapsed: !this.state.collapsed,
        });
		if (this.state.collapsed === false) {
			brand.innerHTML = " ";
		}
		else {
			brand.innerHTML = "Mile High Coding";
		}
		
      };

    render() {
        return (
			<>
				<Layout style={{ minHeight: "100vh" }}>
					<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
						<h1 id="brand">Mile High Coding</h1>
						<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
							<Menu.Item key="1" icon={<HomeOutlined />}>
								<Link to="/">Home</Link>
							</Menu.Item>
							<Menu.Item key="2" icon={<BookOutlined />}>
								<Link to="/about">About</Link>
							</Menu.Item>
							<Menu.Item key="3" icon={<CodeOutlined />}>
								<Link to="/projects">Projects</Link>
							</Menu.Item>
							<Menu.Item key="4" icon={<HistoryOutlined />}>
								<Link to="/jobs">Job History</Link>
							</Menu.Item>
							<Menu.Item key="5" icon={<FormOutlined />}>
								<Link to="/contact">Contact Me</Link>
							</Menu.Item>
						</Menu>
					</Sider>
					<Layout className="site-layout">
						<Header className="site-layout-background" style={{ paddingLeft: "1rem" }}>
							{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
							className: 'trigger',
							onClick: this.toggle,
							})}
							
						</Header>
						<Routes>
							<Route path="/" element={<HomeContainer />}/>
							<Route path="/skills" element={null}/>
							<Route path="/about" element={<AboutContainer />}/>
							<Route path="/projects" element={null}/>
							<Route path="/jobs" element={null}/>
							<Route path="/contact" element={null}/>
						</Routes>
						<Footer style={{ textAlign: "center" }}>Mile High Coding | Created by Ethan Gruenemeier</Footer>
					</Layout>
				</Layout>
		  	</>
        );
    }
}

export default Navigation;