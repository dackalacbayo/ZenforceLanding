import React, { Component } from 'react'
import image1 from '../assets/images/twodevices@2x.png'

const features = [
    {title: 'Notifications for Individual and broadcast messages', active:false, icon:'feat fas fa-bell',desc:'Donec sed odio dui. Etiam porta sem ut id elit. Morbi leo risus'},
    {title: 'Task Creation & Management', active:true, icon:'feat fas fa-tasks',desc:'Involves in planning, tracking and reporting. It helps individual or groups to achieve goals.'},
    {title: 'Email Integration', active:false, icon:'feat fas fa-emvelope',desc:'Donec sed odio dui. Etiam porta sem ut id elit. Morbi leo risus'},
    {title: 'Calendar View', active:false, icon:'feat fas fa-calendar-alt',desc:'Donec sed odio dui. Etiam porta sem ut id elit. Morbi leo risus'},
    {title: 'Task List View', active:false, icon:'feat fas fa-tasks',desc:'Donec sed odio dui. Etiam porta sem ut id elit. Morbi leo risus'},
    {title: 'Expense & Budget Tracker', active:true, icon:'feat fas fa-dollar-sign',desc:'Track project expenses for small to large-scale of projects that also include budget tracking'},
    {title: 'In-App Search Facility', active:false, icon:'feat fas fa-search',desc:'Donec sed odio dui. Etiam porta sem ut id elit. Morbi leo risus'},
    {title: 'Commenting Facility', active:false, icon:'feat fas fa-comments',desc:'Donec sed odio dui. Etiam porta sem ut id elit. Morbi leo risus'},
    {title: 'Template Creation For Recurring Tasks', active:true, icon:'feat fas fa-list',desc:'Enables you to create a template for tasks that repeat at a desired interval'},
    {title: 'Check In/Out from Sites', active:true, icon:'feat fas fa-check-circle',desc:'Donec sed odio dui. Etiam porta sem ut id elit. Morbi leo risus'},
    {title: 'Address Book For Client Details', active:false, icon:'feat fas fa-address-book',desc:'Donec sed odio dui. Etiam porta sem ut id elit. Morbi leo risus'},
    {title: 'Work Group Creation and Management', active:false, icon:'feat fas fa-users',desc:'Donec sed odio dui. Etiam porta sem ut id elit. Morbi leo risus'},
    {title: 'Geo Tagging', active:true, icon:'feat fas fa-tags',desc:'Automatically attach location information to your digital media'},
    {title: 'Detailed Reporting', active:true, icon:'feat fas fa-clipboard-list',desc:'Gives you automatic, accurate and structural digital reports'},
    {title: 'Offline Capable', active:true, icon:'feat fas fa-power-off',desc:'Can access without an Internet Connection'},
    {title: 'Mobile Ready', active:true, icon:'feat fas fa-mobile',desc:'Performs well even on mobile devices'},
    {title: 'Chat Facility', active:false, icon:'feat fas fa-rocketchat',desc:'Donec sed odio dui. Etiam porta sem ut id elit. Morbi leo risus'},
]

const FeatureItem = ({title,icon,desc}) => (
  <div className="col-lg-3 m-0">
    <h2 className="featurette-heading"><i className={icon}></i></h2>
    <h5 className="feature_title">{title}</h5>
    <p className="feature_desc">{desc}</p>
  </div>
)

class Features extends Component {
  render
  render(){
    return(
      <div className="container text-center py-5">
        <h2 className="feature-heading">What we do have</h2>
        <div className="row mb-5">
          {features.filter((feat) => {return (feat.active === true)})
                   .map((feat) => {return <FeatureItem {...feat}/>})
          }
        </div>
      </div>
    )
  }
}

export default Features
