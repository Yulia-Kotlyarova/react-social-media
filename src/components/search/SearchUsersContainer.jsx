import { connect} from 'react-redux';
import SearchUsers from './SearchUsers';
import { follow, unfollow, togglePage, followProgress, getUsersThunkCreator  } from '../data/search-reduser.js';
import { withAuthRedirectComponent } from '../hoc/AuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => { // принимает стейт и возвращает только то, что нужно юзеру
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, 
        { follow, unfollow, togglePage, followProgress, getUsers:getUsersThunkCreator }),//3) put result in connect
    withAuthRedirectComponent // 2) put SearchUsers in that Func and get result
  )(SearchUsers)// 1) takes SearchUsers

// const UserRedirectComponent = withAuthRedirectComponent(SearchUsers); // HOC for redirect

// const SearchUsersContainer = connect(mapStateToProps, 
//     { follow, unfollow, togglePage, followProgress, getUsers:getUsersThunkCreator })(UserRedirectComponent);


// export default SearchUsersContainer;
