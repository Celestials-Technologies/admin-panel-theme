'use client';
import { DataTable } from '@/components/Table/table2';
import { IUserTable } from '@/interface/accountSetting/user';
import { ColumnDef } from '@tanstack/react-table';

const UserTable = () => {
  const columns: ColumnDef<IUserTable>[] = [
    {
      header: 'User Name',
      cell: (info) => {
        const name = info.row.original.name;
        const email = info.row.original.email;

        return <div>{`${name}  ${email}`}</div>;
      },
      size: 193,
      minSize: 193,
      maxSize: 193,
    },
    {
      header: 'Role',
      accessorKey: 'role',
    },
    {
      header: 'Access Type',
      accessorKey: 'accessType',
    },
  ];

  const data = [
    {
      name: 'Daniel Rist',
      email: 'Daniel.rist@gmail.com',
      sent: '06.01.2022',
      role: 'Owner',
      accessType: 'Admin',
    },
    {
      name: 'Daniel Rist',
      email: 'Daniel.rist@gmail.com',
      sent: '06.01.2022',
      role: 'Owner',
      accessType: 'Admin',
    },
  ];

  return (
    <div className="px-5 py-[30px] md:px-7">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default UserTable;
