import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import user from "./data/user.json";
import statsData from "./data/statistical-data.json";
import FriendList from "./components/FriendsList/FriendList";
import friendList from "./data/friends.json";
import TransactionsHisory from "./components/Transactions/TransactionHistory";
import transactions from "./data/transactions.json";

const App = () => (
  <div className="container">
    <Profile {...user} />
    <Statistics title="Your Filetypes Stats" data={statsData} />
    <FriendList friends={friendList} />
    <TransactionsHisory data={transactions} />
  </div>
);

export default App;
