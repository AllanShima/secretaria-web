import { Button } from '@/components/ui/button';
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormState } from '@base-ui/react';
import React, { useState } from 'react'

const ClientEventDialog = () => {
    const [form, setForm] = useState<FormState>({
      email: "",
      senha: ""
    });
    
    function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    return (
        <form>
            <DialogContent className="sm:max-w-md dark">
                <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                        Anyone who has this link will be able to view this.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input
                            id="link"
                            defaultValue="https://ui.shadcn.com/docs/installation"
                            readOnly
                        />
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose render={<Button type="button">Close</Button>} />
                    <Button variant={'outline'} type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>            
        </form>
    )
}

export default ClientEventDialog
