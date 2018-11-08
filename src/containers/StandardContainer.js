import { Container } from 'unstated';
import firebase from '../firebase';

export default class StandardContainer extends Container {
    state = {
        standards: [],
        standardHash: {},
        selectedStandard: ''
    }

    fetchAllStandards = () => {
        const ref = firebase.database().ref('standard')
        const ids = []
        const hash = {}
        ref.once('value', snapshot => {
            snapshot.forEach(standard => {
                ids.push(standard.key) 
                hash[standard.key] = standard.val()
            })
            this.setState({ standards: ids, standardHash: hash })
        })
    }
    
    addStandard = (standard) => {
        const standardsRef = firebase.database().ref('standard');
        standardsRef.push(standard);
    };  


    // updateStandard = (standardId, standardDetails) => {
    //     const standardRef = firebase.database().ref(`/standard/${standardId}`);
    //     standardRef.update(standardDetails);
    // };

    // Sets standard selected in the sub menu for later reference when standare specific
    // student lists are populated in register.
    selectStandard = (id) => {
        console.log('container id', id)
        this.setState({ selectedStandard: id })
    }

    // Methods for retrieving data in components 
    selectors = {
        getAllStandards: () => this.state.standards || [],
        getSelectedStandard: () => this.state.standardHash[this.state.selectedStandard] || {},
        getStandardData: (id) => this.state.standardHash[id] || {}
    }

 }