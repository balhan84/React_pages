import FilterPanel from "./FilterPanel";
import UserList from "./UserList";
import styles from "../UsersPage/UsersPages.module.css";

function UsersPage() {
  return (
    <section>
      <h1>Users List</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.filterContainer}>
          <FilterPanel />
        </div>
        <div className={styles.listContainer}>
          <UserList />
        </div>
      </div>
    </section>
  );
}

export default UsersPage;
