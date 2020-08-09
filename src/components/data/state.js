import monster from '../../img/angry-monster.svg';
import eye from '../../img/eye-open.svg';
import jelly from '../../img/jellyfish.svg';
import unity from '../../img/unity-hand.svg';
import cat from '../../img/cat-face.svg';


let state = {

    linkData: [
      { id: 1, link: "/profile", linkName: "profile"},
      { id: 2, link: "/dialog", linkName: "dialog"},
      { id: 3, link: "/news", linkName: "news"},
      { id: 4, link: "/music", linkName: "music"},
      { id: 5, link: "/settings", linkName: "settings"},
      // { id: 6, link: "/friends", linkName: "friends"},
    ],

    messagesData: [
        {id: '1', message: 'Hi!'},
        {id: '2', message: 'Pipetka! '},
        {id: '3', message: 'Pipetka loves you!'},
      ],

      dialogsData: [
        {id: '1', name: 'Pipetka', ava: `${monster}`},
        {id: '2', name: 'Kykyshka ', ava: `${eye}`},
        {id: '3', name: 'Senya', ava: `${jelly}`},
        {id: '4', name: 'Fatty Cat', ava: `${unity}`},
        {id: '5', name: 'Murrr', ava: `${cat}`},
      ],
      
      postData: [
        {id: '1', message: 'Hi! I am pipetka!', likeCount: '12' },
        {id: '2', message: "It's my first post.", likeCount: '13' },
        {id: '3', message: 'Pipetka loves you!', likeCount: '69' },
      ]
}

export default state;
