'use client';

import { Suspense } from 'react';
import CreateAddUI from '../../components/createAdd/createAdd';

export default function CreateAdd() {
  return (
    <main>
      <Suspense>
        <CreateAddUI />
      </Suspense>
    </main>
  );
}
