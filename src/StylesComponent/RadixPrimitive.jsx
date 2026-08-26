import React from 'react'
import { DropdownMenu } from "radix-ui";

function RadixPrimitive() {
  return (
    <div>
      <DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button className="IconButton" aria-label="Customise options">
					hallo
				</button>
			</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>
          <h1>test</h1>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <h1>test2</h1>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <h1>test3</h1>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}

export default RadixPrimitive
