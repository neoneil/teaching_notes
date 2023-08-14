import React from "react";
import './Home.scss'
// Home page is the words page in default
import { useState } from "react";
import countriesData from "./Roots";
import Table from "./Table";
const Home = () => {

    const [countries] = useState([...countriesData]);
    return (
        <div className="container">
            <div className="col">
                <Table data={countries} rowsPerPage={10} />
            </div>
            <div className="col">
                <Table data={countries} rowsPerPage={10} />
            </div>
        </div>

    );


    // return (

    //     <div className="row">
    //         <div className="col-12">
    //             <button type="button" className="buttonStyle">Warning</button>
    //             <table className="table table-striped">
    //                 <thead>
    //                     <tr>
    //                         <th scope="col">Root</th>
    //                         <th scope="col">Meaning</th>
    //                         <th scope="col">Words</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     <tr>
    //                         <td align="left">dia</td>
    //                         <td align="left">across; through</td>
    //                         <td align="left">dialogue, diameter, diagnosis</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">dic/dict</td>
    //                         <td align="left">speak; say</td>
    //                         <td align="left">dictionary, dictate, contradict</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">dis</td>
    //                         <td align="left">not</td>
    //                         <td align="left">disagree, disinfect, disobey</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">ence/ance</td>
    //                         <td align="left">state; condition</td>
    //                         <td align="left">performance, conference, insurance</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">equ</td>
    //                         <td align="left">equal</td>
    //                         <td align="left">equator, equality, equation</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">ex</td>
    //                         <td align="left">former; past</td>
    //                         <td align="left">ex-girlfriend, ex-president, ex-mayor</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">fer</td>
    //                         <td align="left">carry</td>
    //                         <td align="left">transfer, conifer, aquifer</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">frac/frag</td>
    //                         <td align="left">break</td>
    //                         <td align="left">fraction, fragment, fragile</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">ful</td>
    //                         <td align="left">full of</td>
    //                         <td align="left">thoughtful, painful, helpful</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">gen</td>
    //                         <td align="left">born</td>
    //                         <td align="left">gene, gender, genesis</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">geo</td>
    //                         <td align="left">earth</td>
    //                         <td align="left">geology, geode, geography</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">grad</td>
    //                         <td align="left">step</td>
    //                         <td align="left">graduation, graduate, gradual</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">graph</td>
    //                         <td align="left">write</td>
    //                         <td align="left">paragraph, calligraphy, autograph</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">hydro/hydra</td>
    //                         <td align="left">water</td>
    //                         <td align="left">hydrate, hydrogen, hydroplane</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">hyper</td>
    //                         <td align="left">over; beyond</td>
    //                         <td align="left">hyperactive, hyperlink, hyperventilate</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">ian</td>
    //                         <td align="left">related to; like</td>
    //                         <td align="left">librarian, pedestrian, historian</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">ic/tic</td>
    //                         <td align="left">having to do with</td>
    //                         <td align="left">realistic, organic, metallic</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">ile</td>
    //                         <td align="left">related to</td>
    //                         <td align="left">reptile, sterile, juvenile</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">in</td>
    //                         <td align="left">not</td>
    //                         <td align="left">incapable, incomplete, inaudible</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">inter</td>
    //                         <td align="left">between</td>
    //                         <td align="left">internet, intermission, international</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">intra</td>
    //                         <td align="left">within</td>
    //                         <td align="left">intrastate, intramural, intrapersonal</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">ism</td>
    //                         <td align="left">condition; belief in</td>
    //                         <td align="left">racism, tourism, journalism</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">ist</td>
    //                         <td align="left">person who does</td>
    //                         <td align="left">soloist, artist, cyclist</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">ity</td>
    //                         <td align="left">state of being</td>
    //                         <td align="left">creativity, disability, equality</td>
    //                     </tr>
    //                     <tr>
    //                         <td align="left">ject</td>
    //                         <td align="left">throw</td>
    //                         <td align="left">eject, reject, interject</td>
    //                     </tr>
    //                 </tbody>
    //             </table>
    //             <nav aria-label="Page navigation example">
    //                 <ul className="pagination">
    //                     <li className="page-item">
    //                         <a className="page-link" href="/" aria-label="Previous">
    //                             <span aria-hidden="true">&laquo;</span>
    //                         </a>
    //                     </li>
    //                     <li className="page-item"><a className="page-link" href="/">1</a></li>
    //                     <li className="page-item"><a className="page-link" href="/">2</a></li>
    //                     <li className="page-item"><a className="page-link" href="/">3</a></li>
    //                     <li className="page-item">
    //                         <a className="page-link" href="/" aria-label="Next">
    //                             <span aria-hidden="true">&raquo;</span>
    //                         </a>
    //                     </li>
    //                 </ul>
    //             </nav>
    //         </div>
    //     </div>

    // );
}

export default Home;