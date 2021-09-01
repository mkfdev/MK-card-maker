import {firebaseDatabase} from "./firebase";

class CardRepository {
  syncCards(userId, onUpdate){
    const ref = firebaseDatabase.ref(`${userId}/cards`);
    //on(계속해서 확인한다) value가 있는지
    ref.on('value', (snapshot) => {
      //snapshot 데이터
      const data = snapshot.val();
      //data가 있으면 onUpdate함수를 호출
      data && onUpdate(data);
    })

    //on끄기
    return () => ref.off();
  }
  saveCard(userId, card) {
    //set() 데이터 쓰기
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCard(userId, card) {
    firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;