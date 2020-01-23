import React, { Component } from 'react';
import './ShowsPage.css';
import Context from '../Contexts/Context';

class ShowsPage extends Component {
    static contextType = Context;

    render() {
        return (
            <Context.Consumer>
                {(value) => (
                    <div className='showspage'>
                    <section className='image-showspage'>
                        {this.context.shows.map(show => (
                            <div key={ show.id }> 
                                <h3>{ show.venue }</h3>
                                <h3>{ show.date }</h3>
                                <h3>{ show.city }</h3>
                                <br/>
                            </div>
                        ))}
                    </section>
                    </div>
                )}  
            </Context.Consumer>


            // <div className='showspage'>
            //     <section className='image-showspage'>
            //         {this.context.shows.map(show => {
            //             const d = new Date(show.date);
            //             const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            //             return (
            //             <div key={ show.id }> 
            //                 <h3>{ `${ months[d.getMonth()] } ${ d.getDate() }, ${ d.getFullYear() }` }</h3>
            //                 <h6>{ show.city }</h6>
            //                 <h6>{ show.venue }</h6>
            //                 <br/>
            //             </div>
            //         )})}
            //     </section>
            // </div>
            ); 
        }
    }

export default ShowsPage;