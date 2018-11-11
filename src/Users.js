import React from "react";
import { Responsive, List, Datagrid, TextField, SimpleList } from "react-admin";
import EmailField from "./EmailField";

export const UserList = props => (
  <List {...props}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => `${record.email} email`}
          tertiaryText={record => `${record.id} id`}
        />
      }
      medium={
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
        </Datagrid>
      }
    />
  </List>
);

// export const PostList = props => (
//   <List {...props}>
//     <Responsive
//       small={
//         <SimpleList
//           primaryText={record => record.title}
//           secondaryText={record => `${record.views} views`}
//           tertiaryText={record =>
//             new Date(record.published_at).toLocaleDateString()
//           }
//         />
//       }
//       medium={
//         <Datagrid>
//           <TextField source="id" />
//           <ReferenceField label="User" source="userId" reference="users">
//             <TextField source="name" />
//           </ReferenceField>
//           <TextField source="title" />
//           <TextField source="body" />
//           <EditButton />
//         </Datagrid>
//       }
//     />
//   </List>
// );
