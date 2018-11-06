import React from 'react';
import './App.css';
import Section  from './components/Section/index';
import PanelInfo  from './components/Panel-Info/index';
import PanelGrid from './components/Panel-Grid/index';
import PanelList from './components/Panel-List/index';
import DataPastMeetups  from './stores/data-pastmeetups';
import DataMemberList  from './stores/data-memberlist';
import DataEventDetail  from './stores/data-eventdetail';


class Body extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            DataEventDetail,
            DataPastMeetups,
            DataMemberList,
        }
    }

    render(){
        const {DataEventDetail, DataPastMeetups, DataMemberList} = this.state

        return (
            <div className="Body">
                <Section title="Next Meetup">
                    {DataEventDetail
                        .map((data, index) => (
                            <PanelInfo key={index} PanelInfoTitle={data.EventDetailTitle} PanelInfoDate={data.EventDetailDate} PanelInfoDescription={data.EventDetailDescription}/>
                        ))
                    }
                </Section>
                {/* <div className="ContentPage">
                    <div className="ContentWording-Title">Next Meetup</div>
                    <div className="ContentWording-Description">
                        <div className="ContentWording-Description-Title">Awesome Meetup and Event</div>
                        <div className="ContentWording-Description-Date">25 january 2019</div>
                        <div className="ContentWording-Description-Desc">
                            Hello, Javascript & Node.js Ninjas!<br/>
                            Get ready for ou monthly meetup JakartaJS! This will be our fifth meetup of 2018!<br/>
                            The meetup format will contain short stories and technical talks.<br/>
                            If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.<br/><br/>
                            Remember to bring a photo ID to get through building security.<br/>
                            ----------<br/>
                            See you there!<br/>
                            Best, Hengki, Giovanni, Sofian, Riza, Agung The Jakarta JS Organizers
                        </div>
                    </div>
                </div> */}

                <Section title="About Meetup">
                    <p>Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta Area.</p>
                    <p>Twitter: @JakartaJS and we use hashtag #jakartajs.</p>
                </Section>

                <Section title="Members" url="See All">
                    {DataMemberList
                        .map((data, index) => (
                            <PanelList key={index} PanelListTitleName={data.PanelListTitleName} PanelListName={data.PanelListName} PanelListDescription={data.PanelListDescription}/>
                        ))
                    }
                    {/* <PanelList PanelListTitleName="Organizers" PanelListName="Adhy Wiranata" PanelListDescription="4 Others."/> */}
                </Section>

                <Section title="Past Meetups" url="See All">
                    {DataPastMeetups
                        .map((data, index) => (
                            <PanelGrid key={index} PanelGridDate={data.PanelGridDate} PanelGridTitleName={data.PanelGridTitleName} PanelGridDescription={data.PanelGridDescription}/>
                        ))
                    }
                </Section>
                
                {/* <Panel ValueTitleName="Past Meetups" ValueUrlName="See All">
                </Panel> */}

            </div>
        )
    }
}

export default Body