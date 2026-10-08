import './App.css';
import ParkCard from './components/ParkCard';

const App = () => {

  return (
    <div className="App">
      <div className="Header ">
        <h1>Local Parks with Basketball Courts</h1>
      </div>

      <div className="Parks-section">
        <ParkCard name="College Hills Park" location="Arlington, TX" link="https://www.arlingtontx.gov/Parks-Places/Parks-Trails/Park-Finder/College-Hills-Park" img="https://www.arlingtontx.gov/files/assets/city/v/1/parks-amp-recreation/images/parks/college-hills/college_hills_park_6.jpg"/>
        <ParkCard name="Fielder Park" location="Arlington, TX" link="https://www.arlingtontx.gov/Parks-Places/Parks-Trails/Park-Finder/Fielder-Park" img="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmhmAy9eRM8keIFH5FkHGwYJPHX5dVeRc-08nbKy3ZE5StfKkni2dRtOtwVGS7vnKCDeUb2hKIVLJp5E7lbON3ygnG14Hb3okYEazHXXgF_ij9b_h5rB_GPcYF3O2akXZvRkD0=s1360-w1360-h1020" />
        <ParkCard name="Cravens Park" location="Arlington, TX" link="https://www.arlingtontx.gov/Parks-Places/Parks-Trails/Park-Finder/Cravens-Park" img="https://www.arlingtontx.gov/files/assets/city/v/1/parks-amp-recreation/images/parks/cravens/cravens_park_6.jpg"/>
        <ParkCard name="Bob Cooke Park" location="Arlington, TX" link="https://www.arlingtontx.gov/Parks-Places/Parks-Trails/Park-Finder/Bob-Cooke-Park" img="https://www.arlingtontx.gov/files/assets/city/v/1/parks-amp-recreation/images/parks/bob-cooke/bob_cooke_park_5.jpg"/>
        <ParkCard name="Meadowbrook Park" location="Arlington, TX" link="https://www.arlingtontx.gov/Parks-Places/Parks-Trails/Park-Finder/Meadowbrook-Park" img="https://www.arlingtontx.gov/files/assets/city/v/1/parks-amp-recreation/images/parks/meadowbrook/meadowbrook_park_7.jpeg"/>
        <ParkCard name="S.J. Stovall Park" location="Arlington, TX" link="https://www.arlingtontx.gov/Parks-Places/Parks-Trails/Park-Finder/SJ-Stovall-Park" img="https://www.arlingtontx.gov/files/assets/city/v/1/parks-amp-recreation/images/parks/sj-stovall/sj_stovall_park_10_1.jpeg"/>
        <ParkCard name="George Stevens Park" location="Arlington, TX" link="https://www.arlingtontx.gov/Parks-Places/Parks-Trails/Park-Finder/George-Stevens-Park" img="https://www.arlingtontx.gov/files/assets/city/v/1/parks-amp-recreation/images/parks/george-stevens/george_stevens_park_5.jpeg"/>
        <ParkCard name="Johnson Steet Park" location="Grand Praire, TX" link="https://www.gptx.org/Parks/Johnson-Street-Park" img="https://www.gptx.org/files/sharedassets/public/v/2/departments/parks-arts-and-recreation/images/johnson-street-park.jpg?dimension=pageimagefullwidth&w=768" />
        <ParkCard name="Friendship Park" location="Grand Praire, TX" link="https://www.gptx.org/Parks/Friendship-Park" img="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnCYLYkWt_jvByjkGWIWEFZ26NVRL-DDb9BnNcuv1eNUiVFuWlZICjefwqsesKM-CpLQzG7i2-2jRbWAtzZkHoHNCzBNAARfMh3HjvhbK3s7DANZmNVm3A6_PHyyOPCTPQKNvTv=s1360-w1360-h1020" />
        <ParkCard name="Type Park" location="Grand Praire, TX" link="https://www.gptx.org/Parks/Tyre-Park" img="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlu7dzV_3L9ATckoOWwN2nRIKgitEauRro6ryEB_qYP1XfxsnRFNHSS_i5wICMwyMfYhzD35lZPTnKvVTYt2SIc0bLIOrg-1m0fUHaed3I-IT3Al4jDpTlvw-F34aF9aM4DYTZc=s1360-w1360-h1020" />
      </div>
    </div>
  )
}

export default App