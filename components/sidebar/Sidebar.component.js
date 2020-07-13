import React from 'react'

const Sidebar = () => {
    return (
        <div className="secondary widget-area" role="complementary">
            <aside className="widget widget_text">
                <h3 className="widget-title">About Me</h3> 
                <div className="textwidget">
                    <p>
                        <img src="https://colorlib.com/activello/wp-content/uploads/sites/10/2015/11/photo-1438109491414-7198515b166b1.jpg" alt="About Me" />
                    </p>
                    <p>
                        My name is 
                        <strong>Activello</strong> 
                        and I am an awesome WordPress blog theme for photography, food, travel and other blogs. I was created by 
                        <strong><em>
                        <a href="https://colorlib.com/" taget="_blank">colorlib</a></em></strong>. 
                    </p>
                </div>
            </aside>              
        </div>
    );
}
 
export default Sidebar;