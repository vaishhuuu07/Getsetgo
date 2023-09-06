import React from 'react'
import styles from './Itinerary.module.css';

const Itinerary = () => {

    const itinerarydata = [
        {
            id:1,
            Date: '15th Dec',
            heading: 'Enjoy at the beach',
            content: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
            },
            {
                id:2,
                Date: '16th Dec',
                heading: 'Visiting the locals',
                content: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
            },
            {
                id:3,
                Date: '17th Dec',
                heading: 'Fun activities at the Resort',
                content: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
            },
            {
                id:4,
                Date: '18th Dec',
                heading: 'Exploring the palaces',
                content: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
            },
            {
                id:5,
                Date: '19th Dec',
                heading: 'Mountain Trekking',
                content: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.',
            }

            
    ]

    return (

        <div className={styles.timeline}>
            {itinerarydata.map((i) => {

const classToApply = i.id % 2 === 0 ? styles.left : styles.right;

                return (

                    <div className={`${styles.container} ${classToApply}`}>
                    <div className={styles.date}>{i.Date}</div>
                    <i className={styles.icon}>Icon</i>
                    <div className={styles.content}>
                    <h2>{i.heading}</h2>
                    <p>
                        {i.content}
                    </p>
                    </div>
                </div>

                )
            })}

    </div>
            
// //   <div className={`${styles.container} ${styles.left}`}>
// //     <div className={styles.date}>15 Dec</div>
// //     <i className={styles.icon}>Icon</i>
// //     <div className={styles.content}>
// //       <h2>Lorem ipsum dolor sit amet</h2>
// //       <p>
// //         Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
// //       </p>
// //     </div>
// //   </div>
// //   <div className={`${styles.container} ${styles.right}`}>
// //     <div className={styles.date}>22 Oct</div>
// //     <i className={styles.icon}>Icon</i>
// //     <div className={styles.content}>
// //       <h2>Lorem ipsum dolor sit amet</h2>
// //       <p>
// //         Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
// //       </p>
// //     </div>
// //   </div>
// //   {/* <div className="container left">
// //     <div className="date">10 Jul</div>
// //     <i className="icon fa fa-user"></i>
// //     <div className="content">
// //       <h2>Lorem ipsum dolor sit amet</h2>
// //       <p>
// //         Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
// //       </p>
// //     </div>
// //   </div>
// //   <div className="container right">
// //     <div className="date">18 May</div>
// //     <i className="icon fa fa-running"></i>
// //     <div className="content">
// //       <h2>Lorem ipsum dolor sit amet</h2>
// //       <p>
// //         Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
// //       </p>
// //     </div>
// //   </div>
// //   <div className="container left">
// //     <div className="date">10 Feb</div>
// //     <i className="icon fa fa-cog"></i>
// //     <div className="content">
// //       <h2>Lorem ipsum dolor sit amet</h2>
// //       <p>
// //         Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
// //       </p>
// //     </div>
// //   </div>
// //   <div className="container right">
// //     <div className="date">01 Jan</div>
// //     <i className="icon fa fa-certificate"></i>
// //     <div className="content">
// //       <h2>Lorem ipsum dolor sit amet</h2>
// //       <p>
// //         Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
// //       </p>
// //     </div>
// //   </div> */}
// </div>
    )
}

export default Itinerary