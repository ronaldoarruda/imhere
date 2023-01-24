import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native"
import { styles } from './styles'
import React, { useState } from "react"

import { Participant } from "../../components/Participant"


export function Home () {
  const [ participants, setParticipants ] = useState<string[]>([]);
  const [ participantName, setParticipantName ] = useState('');

  function handleParticipantAdd() {
    if(participants.includes(participantName)) {
       return Alert.alert("Participante Existe", "Já Existe um participante na lista com esse nome")
    }
    
    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) { 
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>NLW</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput

          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)}
            />
        ))}
      </ScrollView>
    </View>
  )
}